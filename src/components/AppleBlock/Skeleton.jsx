import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader 
    speed={2}
    width={300}
    height={300}
    viewBox="0 0 165 283"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="7" y="10" rx="24" ry="24" width="150" height="212" /> 
    <rect x="24" y="236" rx="21" ry="21" width="112" height="35" />
  </ContentLoader>
)

export default Skeleton