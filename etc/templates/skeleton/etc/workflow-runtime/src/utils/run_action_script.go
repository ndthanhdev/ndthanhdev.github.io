package utils

import (
	"dagger/workflow_runtime/internal/dagger"
	"fmt"
)

func RunActionScript(c *dagger.Container, action string) *dagger.Container {
	return c.
		WithExec([]string{"bash", "-l", "-c", fmt.Sprintf("./etc/scripts/actions/%s.ts", action)})
}
