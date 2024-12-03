import Image from 'next/image'

export default function RichTextAsset({ id, assets }) {
  const asset = assets?.find((asset) => asset.sys.id === id)

  if (asset?.url) {
    return <Image src={asset.url} width={300} height={200} alt={asset.description} />
  }

  return null
}