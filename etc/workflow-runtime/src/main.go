// A generated module for WorkflowRuntime functions
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
	"fmt"
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
func (m *WorkflowRuntime) BuildBaseEnv(ctx context.Context) *WorkflowRuntime {
	m.Con = dag.
		Container().
		From("ubuntu:plucky").
		// apt-get update && apt-get install -y curl git unzip gzip xz-utils
		WithExec([]string{"apt-get", "update"}).
		WithExec([]string{"apt-get", "install", "-y", "build-essential", "curl", "git", "unzip", "bash", "gzip", "xz-utils"}).
		// curl -fsSL https://moonrepo.dev/install/proto.sh | bash -s 0.35.3 --yes
		WithExec([]string{"bash", "-l", "-c", "curl -fsSL https://moonrepo.dev/install/proto.sh | bash -s 0.44.1 --yes"}).
		WithEnvVariable("PROTO_HOME", "/root/.proto", dagger.ContainerWithEnvVariableOpts{Expand: true}).
		WithEnvVariable("PATH", "$PATH:$PROTO_HOME/shims:$PROTO_HOME/bin", dagger.ContainerWithEnvVariableOpts{Expand: true})

	return m
}

func (m *WorkflowRuntime) BuildEnv(ctx context.Context) *WorkflowRuntime {
	source := dag.Directory().WithDirectory("/", m.Dir, dagger.DirectoryWithDirectoryOpts{
		Exclude: []string{"node_modules", ".cache", ".moon/cache"},
	})

	m.Con = m.BuildBaseEnv(ctx).
		Con.
		WithWorkdir("/mnt").
		WithFile("/mnt/.prototools", m.Dir.File(".prototools")).
		// proto use
		WithExec([]string{"proto", "use"}).
		// rm .prototools
		WithoutFile("/mnt/.prototools").
		WithMountedDirectory("/mnt", source).
		// moon setup
		WithExec([]string{"moon", "setup"}).
		// yarn install --immutable
		WithExec([]string{"yarn", "install", "--immutable"})

	m = m.setEnvs(ctx)

	return m
}

func (m *WorkflowRuntime) WithAction(ctx context.Context, action string) *WorkflowRuntime {
	m.Con = m.Con.WithExec([]string{"bash", "-l", "-c", fmt.Sprintf("./etc/scripts/actions/%s.ts", action)})

	return m
}

func (m *WorkflowRuntime) Container(ctx context.Context) *dagger.Container {
	return m.Con
}

func (m *WorkflowRuntime) Stdout(ctx context.Context) (string, error) {
	stdout, err := m.Con.Stdout(ctx)
	if err != nil {
		return "", fmt.Errorf("failed to get stdout: %w", err)
	}
	return stdout, nil
}

func (m *WorkflowRuntime) setEnvs(ctx context.Context) *WorkflowRuntime {
	m.Con = m.Con.
		WithEnvVariable("MODE", m.Mode)

	if m.GhToken != nil {
		tokenString, _ := m.GhToken.Plaintext(ctx)

		m.Con = m.Con.
			WithEnvVariable("GH_TOKEN", tokenString)
	}

	return m
}
