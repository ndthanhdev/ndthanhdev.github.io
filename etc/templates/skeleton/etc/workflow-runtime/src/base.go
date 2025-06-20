// A generated module for Runner functions
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
	"dagger/workflow_runtime/internal/dagger"
	"dagger/workflow_runtime/utils"
)

func New(
	// +required
	// +ignore=["node_modules/", ".moon/cache/", ".cache/"]
	dir *dagger.Directory,
	// +optional
	// +default="dev"
	mode string,
	// +optional
	ghToken *dagger.Secret,
) *WorkflowRuntime {
	return &WorkflowRuntime{
		Dir:     dir,
		Mode:    mode,
		GhToken: ghToken,
	}
}

// Setup Proto
func (m *WorkflowRuntime) BuildBaseEnv(ctx context.Context) *dagger.Container {
	return dag.
		Container().
		From("ubuntu:plucky").
		// apt-get update && apt-get install -y curl git unzip gzip xz-utils
		WithExec([]string{"apt-get", "update"}).
		WithExec([]string{"apt-get", "install", "-y", "build-essential", "curl", "git", "unzip", "bash", "gzip", "xz-utils"}).
		// curl -fsSL https://moonrepo.dev/install/proto.sh | bash -s 0.35.3 --yes
		WithExec([]string{"bash", "-l", "-c", "curl -fsSL https://moonrepo.dev/install/proto.sh | bash -s 0.44.1 --yes"}).
		WithEnvVariable("PROTO_HOME", "/root/.proto", dagger.ContainerWithEnvVariableOpts{Expand: true}).
		WithEnvVariable("PATH", "$PATH:$PROTO_HOME/shims:$PROTO_HOME/bin", dagger.ContainerWithEnvVariableOpts{Expand: true})
}

func (m *WorkflowRuntime) BuildBase(ctx context.Context) *WorkflowRuntime {
	source := dag.Directory().WithDirectory("/", m.Dir, dagger.DirectoryWithDirectoryOpts{
		Exclude: []string{"node_modules", ".cache", ".moon/cache"},
	})

	con := m.BuildBaseEnv(ctx).
		WithWorkdir("/mnt").
		WithFile("/mnt/.prototools", m.Dir.File(".prototools")).
		// proto use
		// WithExec([]string{"bash", "-l", "-c", "proto use"}).
		WithExec([]string{"proto", "use"}).
		// rm .prototools
		WithoutFile("/mnt/.prototools").
		WithMountedDirectory("/mnt", source).
		// moon setup
		// WithExec([]string{"bash", "-l", "-c", "moon setup"}).
		WithExec([]string{"moon", "setup"}).
		// yarn install --immutable
		// WithExec([]string{"bash", "-l", "-c", "yarn install --immutable"})
		WithExec([]string{"yarn", "install", "--immutable"})

	utils.SetEnvs(con, ctx, m)

	m.con = con

	return m
}

func (m *WorkflowRuntime) WithAction(ctx context.Context, command string) *WorkflowRuntime {
	m.
		BuildBase(ctx)

	utils.RunActionScript(m.con, command)

	return m
}

func (m *WorkflowRuntime) Test(ctx context.Context) (string, error) {
	return m.
		WithAction(ctx, "test").
		con.
		Stdout(ctx)
}

func (m *WorkflowRuntime) Build(ctx context.Context) *dagger.Directory {
	return m.
		WithAction(ctx, "build").
		con.
		Directory("/mnt/apps/app/public")
}

func (m *WorkflowRuntime) Publish(ctx context.Context) (string, error) {
	return m.
		WithAction(ctx, "publish").
		con.
		Stdout(ctx)
}

// GetMode returns the Mode field of the Runner
func (m *WorkflowRuntime) GetMode() string {
	return m.Mode
}

// GetGhToken returns the GhToken field of the Runner
func (m *WorkflowRuntime) GetGhToken() *dagger.Secret {
	return m.GhToken
}
