package main

import (
	"context"
	"fmt"
)

type Con struct {
	*Container
}

func (c *Con) SetEnvs(ctx context.Context, m *NdthanhdevGithubIo) *Con {
	c.Container = c.Container.
		WithEnvVariable("MODE", m.Mode)

	if m.GhToken != nil {
		tokenString, _ := m.GhToken.Plaintext(ctx)

		c.Container = c.
			WithEnvVariable("GH_TOKEN", tokenString)
	}

	return c
}

func (c *Con) MoonRun(command string) *Con {
	c.Container = c.
		Container.
		WithExec([]string{fmt.Sprintf(`moon run %s`, command)})

	return c
}
