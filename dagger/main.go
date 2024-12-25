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
	// +ignore=["node_modules/", ".moon/cache/", "app/public/", "dagger/"]
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

func (m *NdthanhdevGithubIo) BuildEnv(ctx context.Context) *Con {
	source := dag.Directory().WithDirectory("/", m.Dir, dagger.DirectoryWithDirectoryOpts{
		Exclude: []string{"node_modules", ".cache", ".moon/cache"},
	})

	con := dag.
		Container().
		// From("alpine:3.14").
		// // apk add --no-cache curl git unzip gzip xz
		// WithExec([]string{"apk", "add", "--no-cache", "curl", "git", "unzip", "bash", "gzip", "xz"}).
		From("debian:bookworm").
		// apt-get update && apt-get install -y curl git unzip gzip xz-utils
		WithExec([]string{"apt-get", "update"}).
		WithExec([]string{"apt-get", "install", "-y", "curl", "git", "unzip", "bash", "gzip", "xz-utils"}).
		// curl -fsSL https://moonrepo.dev/install/proto.sh | bash -s 0.35.3 --yes
		WithExec([]string{"bash", "-l", "-c", "curl -fsSL https://moonrepo.dev/install/proto.sh | bash -s 0.43.3 --yes"}).
		WithMountedDirectory("/mnt", source).
		WithWorkdir("/mnt").
		// proto use
		WithExec([]string{"bash", "-l", "-c", "proto use"}).
		// // moon setup
		WithExec([]string{"bash", "-l", "-c", "moon setup"}).
		// yarn install --immutable
		WithExec([]string{"bash", "-l", "-c", "yarn install --immutable"})

	return (&Con{con}).SetEnvs(ctx, m)
}

func (m *NdthanhdevGithubIo) MoonRun(ctx context.Context, command string) *dagger.Container {
	return m.
		BuildEnv(ctx).
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
