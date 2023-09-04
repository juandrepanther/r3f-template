import { useLoader as createModel } from '@react-three/fiber'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function modelLoader(modelUrl: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const loadedModel: any = createModel(GLTFLoader, modelUrl, (loader: any) => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
    loader.setDRACOLoader(dracoLoader)
  })
  return loadedModel
}
