package utils

import (
	"context"
	"dagger/workflow_runtime/internal/dagger"
)

// RunnerInterface defines the interface for Runner objects
type RunnerInterface interface {
	GetMode() string
	GetGhToken() *dagger.Secret
}

func SetEnvs(c *dagger.Container, ctx context.Context, m RunnerInterface) *dagger.Container {
	c = c.
		WithEnvVariable("MODE", m.GetMode())

	if m.GetGhToken() != nil {
		tokenString, _ := m.GetGhToken().Plaintext(ctx)

		c = c.
			WithEnvVariable("GH_TOKEN", tokenString)
	}

	return c
}
