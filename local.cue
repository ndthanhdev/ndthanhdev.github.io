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
			id: "ndthanhdev-modules-cache"
		}

	}

	client: filesystem: {
		"./": read: {
				contents: dagger.#FS,
				exclude: [
					"node_modules",
					"public",
				]
			}

		"./public": write: contents: actions.build.output
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
							_nodeModulesMount
						}
						script: contents: #"""
							yarn install
							"""#
					},
				]
		}

		build: {
			run: bash.#Run & {
				input:   deps.output
				mounts:  _nodeModulesMount
				workdir: "/src"
				script: contents: #"""
					yarn run build
					"""#
			}

			// contents: core.#Subdir & {
			// 	input: run.output.rootfs
			// 	path:  "/src/build"
			// }
		}

		hello: #AddHello & {
			dir: client.filesystem.".".read.contents
			name: "dagger"
		}
	}
}
