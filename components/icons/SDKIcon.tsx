import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const SDKIcon = ({
  width,
  height,
}: {
  width: number
  height: number
}) => {
  const [src, setSrc] = useState<string>(
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  )
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    switch (resolvedTheme) {
      case 'light':
        setSrc('/icons/sdk_light.png')
        break
      case 'dark':
        setSrc('/icons/sdk_dark.png')
        break
    }
  }, [resolvedTheme])

  return <Image src={src} width={width} height={height} alt="Module SDK Icon" />
}
