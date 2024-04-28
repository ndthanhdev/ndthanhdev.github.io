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

type NdthanhdevGithubIo struct {
}

// Returns a container that echoes whatever string argument is provided
func (m *NdthanhdevGithubIo) ContainerEcho(stringArg string) *Container {
	return dag.Container().From("alpine:latest").WithExec([]string{"echo", stringArg})
}

func (m *NdthanhdevGithubIo) Init(ctx context.Context, dir *Directory) *Container {
	source := dag.Directory().WithDirectory("/", dir, DirectoryWithDirectoryOpts{
		Exclude: []string{"node_modules", ".cache"},
	})

	return dag.
		Container().
		From("node:lts").
		WithExec([]string{"yarn", "global", "add", "tsx"}).
		WithMountedDirectory("/mnt", source).
		WithWorkdir("/mnt").
		WithExec([]string{"yarn", "install", "--immutable"})
}

func (m *NdthanhdevGithubIo) Lint(ctx context.Context, dir *Directory) (string, error) {
	return m.Init(ctx, dir).
		WithWorkdir("/mnt/scripts/actions").
		WithExec([]string{"./lint.ts"}).
		Stdout(ctx)
}

func (m *NdthanhdevGithubIo) Test(ctx context.Context, dir *Directory) (string, error) {
	return m.Init(ctx, dir).
		WithWorkdir("/mnt/scripts/actions").
		WithExec([]string{"./test.ts"}).
		Stdout(ctx)
}

func (m *NdthanhdevGithubIo) Build(ctx context.Context, dir *Directory, mode string) *Directory {
	return m.Init(ctx, dir).
		WithWorkdir("/mnt/scripts/actions").
		WithEnvVariable("MODE", mode).
		WithExec([]string{"./build.ts"}).
		Directory("/mnt/app/public")
}

func (m *NdthanhdevGithubIo) Publish(ctx context.Context, dir *Directory, mode string, token *Secret) (string, error) {

	tokenString, _ := token.Plaintext(ctx)

	return m.Init(ctx, dir).
		WithEnvVariable("GH_TOKEN", tokenString).
		WithEnvVariable("MODE", mode).
		WithWorkdir("/mnt/scripts/actions").
		WithExec([]string{"./publish.ts"}).
		Stdout(ctx)
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
