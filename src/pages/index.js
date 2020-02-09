import React from 'react'

// Page Structure
import View from '../components/canvas/canvas'
import Model from '../components/canvas/Model'
import Layout from '../components/layouts/Page'
import Sidebar from '../components/layouts/HUD'

import { LinkedModel } from '../components/canvas/room/Link'

// Styles
import '../scss/layout/_base.scss'
import '../scss/main.scss'


// As the user approaches the website, an imposing museum facade looms in the index..

// note the path is relative to the 'static' directory
// at the root of the project. .glTF files (or binary, in this case)
// are not natively supported by webpack, and cannot be imported as the css above.
const IndexPage = () => (
  <Layout>
    <View center={[0, 1.3, 8]}>
      <LinkedModel link={'/about/'} url={'meshes/index/SP_index8.glb'}/>
      <Model url={'meshes/index/SP_index8.glb'} />
      <Model url={'meshes/index/entrance_lattice.glb'} />
      <spotLight intensity={2} position={[3, 4, 10]} angle={2} penumbra={2} />
    </View>
    <Sidebar />
  </Layout>
)

export default IndexPage
