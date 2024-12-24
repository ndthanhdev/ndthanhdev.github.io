// A generated module for NdthanhdevGithubIo functions
//
// This module has been generated via dagger init and serves as a reference to
// basic module structure as you get started with Dagger.
//
// Two functions have been pre-created. You can modify, delete, or add to them,
// as needed. They demonstrate usage of arguments and return types using simple
// echo and grep commands. The functions can be called from the dagger CLI or
// from one of the SDKs.
//
// The first line in this comment block is a short description line and the
// rest is a long description with more detail on the module's purpose or usage,
// if appropriate. All modules should have a short description.

package main

import (
	"context"
	"dagger/ndthanhdev-github-io/internal/dagger"
)

type NdthanhdevGithubIo struct {
	Dir     *dagger.Directory
	Mode    string
	GhToken *dagger.Secret
}

func New(
	// +required
	dir *dagger.Directory,
	// +optional
	// +default="dev"
	mode string,
	// +optional
	ghToken *dagger.Secret,
) *NdthanhdevGithubIo {
	return &NdthanhdevGithubIo{
		Dir:     dir,
		Mode:    mode,
		GhToken: ghToken,
	}
}

func (m *NdthanhdevGithubIo) init(ctx context.Context) *Con {
	source := dag.Directory().WithDirectory("/", m.Dir, dagger.DirectoryWithDirectoryOpts{
		Exclude: []string{"node_modules", ".cache", "moon/.cache"},
	})

	con := dag.
		Container().
		From("node:22-bookworm").
		WithExec([]string{"apt-get", "install", "-y", "bash", "curl", "git", "unzip", "gzip", "xz-utils"}).
		WithEntrypoint([]string{"/bin/bash", "-l", "-c"}).
		WithExec([]string{"ln -sf /bin/bash /bin/sh"}).
		WithEnvVariable("SHELL", "/bin/bash").
		WithEnvVariable("HOME", "/root").
		WithUser("root").
		// curl -fsSL https://moonrepo.dev/install/proto.sh | bash -s 0.35.3 --yes
		WithExec([]string{`curl -fsSL https://moonrepo.dev/install/proto.sh | bash -s -- 0.35.5 --yes`}).
		// export PROTO_HOME="$HOME/.proto"
		WithEnvVariable("PROTO_HOME", "$HOME/.proto", dagger.ContainerWithEnvVariableOpts{
			Expand: true,
		}).
		// export PATH="$PROTO_HOME/shims:$PROTO_HOME/bin:$PATH"
		WithEnvVariable("PATH", "$PROTO_HOME/shims:$PROTO_HOME/bin:$PATH", dagger.ContainerWithEnvVariableOpts{
			Expand: true,
		}).
		WithMountedDirectory("/mnt", source).
		WithWorkdir("/mnt").
		// proto use
		WithExec([]string{"proto use"}).
		// moon setup
		WithExec([]string{"moon setup"}).
		// yarn install --immutable
		WithExec([]string{"yarn install --immutable"})

	return (&Con{con}).SetEnvs(ctx, m)
}

func (m *NdthanhdevGithubIo) MoonRun(ctx context.Context, command string) *dagger.Container {
	return m.
		init(ctx).
		MoonRun(command).
		Container
}

func (m *NdthanhdevGithubIo) Test(ctx context.Context) (string, error) {
	return m.
		MoonRun(ctx, "scripts:test").
		Stdout(ctx)
}

func (m *NdthanhdevGithubIo) Build(ctx context.Context) *dagger.Directory {
	return m.
		MoonRun(ctx, "scripts:build").
		Directory("/mnt/app/public")
}

func (m *NdthanhdevGithubIo) Publish(ctx context.Context) (string, error) {
	return m.
		MoonRun(ctx, "scripts:publish").
		Stdout(ctx)
}
