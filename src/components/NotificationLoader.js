import React from "react"
import ContentLoader from "react-content-loader"

export const NotificationLoader = () => (
  <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="5" rx="2" ry="2" width="100%" height="80" />
    <rect x="0" y="100" rx="2" ry="2" width="100%" height="80" />
    <rect x="0" y="200" rx="2" ry="2" width="100%" height="80" />
    <rect x="0" y="300" rx="2" ry="2" width="100%" height="80" />

  </ContentLoader>
)

