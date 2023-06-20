/* eslint-disable react/prop-types,import/no-unresolved */
import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'

export default function Figure({ src, caption }) {
  return (
    <figure style={{ marginTop: 2.5 + 'em' }}>
      <img style={{ borderRadius: 10 + 'px' }} src={useBaseUrl(src)} alt={caption} />
      <figcaption style={{ textAlign: 'center' }}>{`${caption}`}</figcaption>
    </figure>
  )
}