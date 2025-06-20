package main

import "dagger/workflow_runtime/internal/dagger"

type WorkflowRuntime struct {
	Dir     *dagger.Directory
	Mode    string
	GhToken *dagger.Secret
	Con     *dagger.Container
}
