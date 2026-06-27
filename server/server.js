import createApp from "./src/app.js"



const app = createApp()

app.listen(3000, ()=>{
  console.log(`Server is starting on port 3000`)
})

