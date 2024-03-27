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
)

type NdthanhdevGithubIo struct{}

// Returns a container that echoes whatever string argument is provided
func (m *NdthanhdevGithubIo) ContainerEcho(stringArg string) *Container {
	return dag.Container().From("alpine:latest").WithExec([]string{"echo", stringArg})
}

func (m *NdthanhdevGithubIo) Init(dir *Directory) *Container {
	return dag.
		Container().
		From("alpine:3.19.1").
		WithExec([]string{"apk", "update"}).
		WithExec([]string{"apk", "add", "--no-cache", "bash", "curl", "util-linux", "git", "unzip", "gzip", "xz"}).
		WithDefaultTerminalCmd([]string{"/bin/bash", "-c"}).
		WithExec([]string{"curl", "-fsSL", "https://moonrepo.dev/install/proto.sh", "|", "bash", "-s", "--", "0.32.1", "--yes"}).
		WithMountedDirectory("/mnt", dir)
	// WithWorkdir("/mnt").
	// WithExec([]string{"proto", "use"})
}

func (m *NdthanhdevGithubIo) Build(ctx context.Context, dir *Directory) *Directory {
	return m.Init(dir).
		WithWorkdir("/mnt/app").
		WithExec([]string{"rm", "-rf", "./public"}).
		WithExec([]string{"yarn", "build"}).
		Directory("./public")
}

// Returns lines that match a pattern in the files of the provided Directory
func (m *NdthanhdevGithubIo) GrepDir(ctx context.Context, directoryArg *Directory, pattern string) (string, error) {
	return dag.Container().
		From("alpine:latest").
		WithMountedDirectory("/mnt", directoryArg).
		WithWorkdir("/mnt").
		WithExec([]string{"grep", "-R", pattern, "."}).
		Stdout(ctx)
}
