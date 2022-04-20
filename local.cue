package ndthanhdev

import (
	"dagger.io/dagger"
	"dagger.io/dagger/core"
	// "universe.dagger.io/yarn"
	"universe.dagger.io/alpine"
	"universe.dagger.io/bash"
	"universe.dagger.io/docker"
)

dagger.#Plan & {

	_nodeModulesMount: "/src/node_modules": {
		dest:     "/src/node_modules"
		type:     "cache"
		contents: core.#CacheDir & {
			id: "node_modules-cache"
		}

	}

	client: {
		filesystem: {
			"./": read: {
					contents: dagger.#FS,
					exclude: [
						"node_modules",
						"public",
					]
				}

			"./public": write: contents: actions.build.contents.output
		}
		env: {
			GITHUB_TOKEN: dagger.#Secret
		}
	}

	actions: {

		deps: docker.#Build & {
				steps: [
					alpine.#Build & {
						packages: {
							bash: {}
							yarn: {}
							git: {}
						}
					},
					docker.#Copy & {
						contents: client.filesystem."./".read.contents
						dest:     "/src"
					},
					bash.#Run & {
						workdir: "/src"
						mounts: {
							// _nodeModulesMount
						}
						script: contents: #"""
							yarn install
							"""#
					},
				]
		}

		build: {
			run: bash.#Run & {
				input: deps.output
				// mounts:  _nodeModulesMount
				workdir: "/src"
				script: contents: #"""
					yarn build
					"""#
			}

			contents: core.#Subdir & {
				input: run.output.rootfs
				path:  "/src/public"
			}
		}

		deploy: {
			run: bash.#Run & {
				input: build.run.output
				workdir: "/src"
				env: {
					GITHUB_TOKEN: client.env.GITHUB_TOKEN
				}
				script: contents: """
					git config --global user.email "dagger-bot@users.noreply.github.com"
					git config --global user.name "Dagger Bot"
					yarn publish -r https://${GITHUB_TOKEN}@github.com/ndthanhdev/ndthanhdev.github.io.git
				"""
			}
		}
	}
}
