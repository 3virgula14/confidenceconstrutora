export interface PortfolioImgGlryPhoto{
    foto: string,
    titulo: string,
    shortstory: string,
    tailstory: string,
    mdsession: string,
}

export interface RPortfolioProps{
    titulo: string,
    sessions: Array<PortfolioImgGlryPhoto>,
    story : {
      twitterlike: string,
      "2paraph": string
    }
  }
  
export type LogoRestModeProps = {
    activated: boolean
}