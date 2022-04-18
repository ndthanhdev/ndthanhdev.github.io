package ndthanhdev

import (
	"dagger.io/dagger"
	"dagger.io/dagger/core"
	// "universe.dagger.io/yarn"
	"universe.dagger.io/alpine"
	"universe.dagger.io/bash"
	"universe.dagger.io/docker"
)

// Write a greeting to a file, and add it to a directory
#AddHello: {
	// The input directory
	dir: dagger.#FS

	// The name of the person to greet
	name: string | *"world"

	write: core.#WriteFile & {
		input: dir
		path: "hello-\(name).txt"
		contents: "hello, \(name)!"
	}

	// The directory with greeting message added
	result: write.output
}


dagger.#Plan & {

	_nodeModulesMount: "/src/node_modules": {
		dest:     "/src/node_modules"
		type:     "cache"
		contents: core.#CacheDir & {
			id: "todoapp-modules-cache"
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
			// echo: dagger.#Exec & {
			//     args: ["echo", "\"abcd1234\""]
			// }

			// echo2: bash.#Run & {
			//     script: contents: "echo Hello World! > ./public/hello.txt"
			//     export: files: "./public/hello.txt": string
			// }

			// nodeVersion: dagger.#Exec & {
			//     args: ["node", "--version"]
			// }

			// echo: powershell.#Build & {
			//     script: contents: "echo"
			//     args: ["hello"]
			//     // script: "install"
			// }

			// install: powershell.#Build & {
			//     script: contents: "yarn"
			//     args: ["install"]
			//     // script: "install"
			// }

			// build: yarn.#Build & {
			// 	source: client.filesystem.".".read.contents
			// 	buildDir: "public"
			// }

			// output: build.output
		}

		hello: #AddHello & {
			dir: client.filesystem.".".read.contents
			name: "dagger"
		}
	}
}
