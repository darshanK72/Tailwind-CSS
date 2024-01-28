import './App.css'

function App() {

  return (
    <>
      <div className="container space-y-20 mb-20">
        <div className="container mx-auto px-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus omnis odit praesentium voluptas, at adipisci? Impedit voluptate deserunt fuga quae!
        </div>
        <div className="box box-content bg-green-400 m-10 p-10 border-8">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsam totam soluta qui voluptatibus alias labore hic beatae quas praesentium.</h3>
        </div>
        <div className="box box-border bg-gray-400 m-10 p-10 border-8 border-green-600">
          <h3>Lorem ipsum dolor sit</h3>
        </div>
      </div>
      <div className="container mx-auto mb-20">
        <div className="container bg-slate-300 h-48 w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quibusdam quia magnam facere error impedit cumque tempora voluptates? Dolor, in.
        </div>
      </div>
      <div className="flex flex-wrap justify-start gap-4 container mb-20">
        <div className="bg-slate-200 w-24 h-24 p-10">
          1
        </div>
        <div className="bg-slate-200 w-24 h-24 p-10">
          2
        </div>
        <div className="bg-slate-200 w-24 h-24 p-10">
          3
        </div>
        <div className="justify-self-end bg-slate-200 w-24 h-24 p-10">
          4
        </div>
      </div>
      <div className="container space-y-10 mb-20">
        <div className="block bg-slate-200 p-10">
          Lorem ipsum dolor sit amet.
        </div>
        <div className="inline-block bg-green-200 p-10 w-1/2">
          Lorem ipsum dolor sit amet.
        </div>
        <div className="inline bg-gray-200 p-10">
          Lorem ipsum dolor sit amet.
        </div>
        <div className="bg-red-200 p-10">
          Lorem ipsum dolor sit amet.
        </div>
      </div>
      <div className="container grid grid-cols-3 gap-2 justify-evenly mb-20">
        <div className="bg-slate-200 h-24 p-10">
          1
        </div>
        <div className="col-span-2 bg-slate-200 h-24 p-10">
          2
        </div>
        <div className="col-span-2 bg-slate-200 h-24 p-10">
          3
        </div>
        <div className="row-span-2 bg-slate-200 h-24 p-10">
          4
        </div>
        <div className="bg-slate-200 h-24 p-10">
          5
        </div>
        <div className="bg-slate-200 h-24 p-10">
          7
        </div>
        <div className="bg-slate-200 h-24 p-10">
          8
        </div>
        <div className="bg-slate-200 h-24 p-10">
          9
        </div>
      </div>
      <div className="container space-y-10 mb-20">
        <div className="border-4 border-gray-800 bg-slate-200 p-10">
          Lorem ipsum dolor sit amet.
        </div>
        <div className="border-4 border-gray-800 rounded-lg bg-green-200 p-10 w-1/2">
          Lorem ipsum dolor sit amet.
        </div>
        <div className="border-4 border-gray-800 rounded-xl bg-gray-200 p-10">
          Lorem ipsum dolor sit amet.
        </div>
        <div className="border-4 border-gray-800 rounded-full w-48 h-48 bg-red-200 p-10">
          Lorem ipsum dolor sit amet.
        </div>
      </div>
    </>
  )
}

export default App
