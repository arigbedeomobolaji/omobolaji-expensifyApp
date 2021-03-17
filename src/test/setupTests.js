import Enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({
 adapter: new Adapter()
})

// new thing we will do is to setup a jest configuration file which is going to allow us to actually specify that that setup tests file should run because it's not like it's in a special location with a special name it's not goint to get picked automatically. 
// setupfiles: you specify an array of files. Jest runs those files before it runs your tests. and this allow us to set things up like the request animation frame polyfill and this setup test files we created.