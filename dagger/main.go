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
	"fmt"
)

type NdthanhdevGithubIo struct {
}

// Returns a container that echoes whatever string argument is provided
func (m *NdthanhdevGithubIo) ContainerEcho(stringArg string) *Container {
	return dag.Container().From("alpine:latest").WithExec([]string{"echo", stringArg})
}

type Con struct {
	*Container
}

func (c *Con) MoonRun(command string) *Container {
	return c.Container.WithExec([]string{fmt.Sprintf(`moon run %s`, command)})
}

func (m *NdthanhdevGithubIo) Init(ctx context.Context, dir *Directory) *Container {
	source := dag.Directory().WithDirectory("/", dir, DirectoryWithDirectoryOpts{
		Exclude: []string{"node_modules", ".cache", "moon/.cache"},
	})

	return dag.
		Container().
		From("node:22-bookworm").
		WithExec([]string{"apt-get", "install", "-y", "bash", "curl", "git", "unzip", "gzip", "xz-utils"}).
		WithEntrypoint([]string{"/bin/bash", "-l", "-c"}).
		WithExec([]string{"ln -sf /bin/bash /bin/sh"}).
		WithEnvVariable("SHELL", "/bin/bash").
		WithEnvVariable("HOME", "/root").
		WithUser("root").
		// curl -fsSL https://moonrepo.dev/install/proto.sh | bash -s 0.35.3 --yes
		WithExec([]string{`curl -fsSL https://moonrepo.dev/install/proto.sh | bash -s -- 0.35.3 --yes`}).
		// export PROTO_HOME="$HOME/.proto"
		WithEnvVariable("PROTO_HOME", "$HOME/.proto", ContainerWithEnvVariableOpts{
			Expand: true,
		}).
		// export PATH="$PROTO_HOME/shims:$PROTO_HOME/bin:$PATH"
		WithEnvVariable("PATH", "$PROTO_HOME/shims:$PROTO_HOME/bin:$PATH", ContainerWithEnvVariableOpts{
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

}

func (m *NdthanhdevGithubIo) Build(ctx context.Context, dir *Directory, mode string) *Directory {
	return (&Con{m.Init(ctx, dir).
		WithEnvVariable("MODE", mode)}).
		MoonRun("scripts:build").
		Directory("/mnt/app/public")
}

func (m *NdthanhdevGithubIo) Publish(ctx context.Context, dir *Directory, mode string, token *Secret) (string, error) {

	tokenString, _ := token.Plaintext(ctx)

	return (&Con{m.
		Init(ctx, dir).
		WithEnvVariable("GH_TOKEN", tokenString).
		WithEnvVariable("MODE", mode)}).
		MoonRun("scripts:publish").
		Stdout(ctx)
}
