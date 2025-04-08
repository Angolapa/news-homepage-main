import { NewArticle } from "./NewArticle"

export  const NewContainer = () => {
  return (
  <aside className="bg-veryDarkBlue  text-offWhite py-[28px] px-[24px]">
    <h1 className="text-softOrange text-[32px] font-bold">New</h1>
    
     <NewArticle 
     tittle='Hydrogen VS Electric Cars'
     text='Will hydrogen-fueled cars ever catch up to EVs?'
     />
     <NewArticle 
     tittle='The Downsides of AI Artistry'
     text='What are the possible adverse effects of on-demand AI image generation?'/>
     <NewArticle 
     tittle='Is VC Funding Drying Up?'
     text='Private funding by VC firms is down 50% YOY. We take a look at what that means.'
     />
  </aside>
  )
}