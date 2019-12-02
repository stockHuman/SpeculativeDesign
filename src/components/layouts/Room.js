import React, { Suspense } from 'react'

// Page Structure & Scene components
import View from '../canvas/canvas'
import Model, { SceneLinks, Frame } from '../canvas/Model'
import Text from '../canvas/Text'

// Materials and Loaders from Three

// Links and data
import Sculpture from '../canvas/Sculpture'

export default ({ data }) => {
	const d = data.markdownRemark.frontmatter
	const title = d.title || d.name

	// gets the link to previous and next rooms
	const next = d.linkto
	const prev = d.linkfrom
	const alt = d.linkalt

	// gets a random room shape
	const room = d.room
		? d.room
		: `room${Math.floor(Math.random() * 2)}.glb`

	return (
		<View center={[0, 0, 0]}>
			<SceneLinks url={`/meshes/tests/room1.temp.001.glb`}
				linkto={next}
				linkfrom={prev}
				linkalt={alt}
			/>
			<Suspense fallback={null}>
				<Model url={`/meshes/rooms/${room}`} />
				<Model url={`/meshes/rooms/plinths/plinth-0.glb`} />
			</Suspense>
			<ambientLight intensity={0.01} />
			<directionalLight intensity={0.5} position={[-1, 1, -1]} />
			<Sculpture />
			<Text
				string={title}
				options={
					{
						position: [-2,2,Math.random()],
						rotation: [Math.random(),Math.random(),Math.random()],
						color: 'yellow'
					}
				}
				size={0.2 + (Math.random() / 2)}
				bevelEnabled={true}
				height={0.1}
				bevelThickness={0.01}
				bevelSize={0.01}
				bevelSegments={1}
				curveSegments={4}
		/>
		</View>
	)
}
