Life cycle of components

There are three phases to a component lifecycle

1. Mounting (Creation)
2. Updating (update)
3. Unmounting (remove/destroy)

useEffect --> is a hook in react which will handle the side effects which are not in our control basically like fetch calls, handling APIs 

## Syntax: useEffect(()=>{function},[dependancy array])
[]-->no dependancy, react uses useeffect only in mounting(creation) phasing of the component
 [count] here we have the count dependency, hence the useEffect will be called for every change

by using the useEffect actually we can control the fetch calls or other codes like when to do a fetch call, when to not based on what like that.