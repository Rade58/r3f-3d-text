# R3F Workshops - 3D Text

- Bootstraped with:

```
pnpm create vite
```

- dependancies

```
pnpm add three @react-three/fiber @react-three/drei leva@0.9.34
```

```
pnpm add -D r3f-perf @types/three
```

# Leva @0.9.34

latest version has bug I think, unable to use joystick and color picker (maybe because I'm using react 18)

# Providing typeface font

Find font that you like

make sure you have licence

go here to convert it:

<https://gero3.github.io/facetype.js/>

# What we used

- `Text3D` heper from drei
- `Center` helper to center the text

We used bunch of `TextGeometry` (threejs class) instance attributes you can see here: <https://threejs.org/docs/#examples/en/geometries/TextGeometry> to change look of text

- These TextGeometry attributes we added to Text3D helper
  **you can use lava to change these attributes, but be carefull since geometry will be disposed and then created again (it's ok for you to find perfect values, but don't allow user to do this, and don't animate these values)**

# Matcap from cdn

<https://github.com/emmelleppi/matcaps>

we used it with help of `useMatcapTexture` helper, where we provide id of the texture

but these matcaps we load from cdn so don't use it for production

For production, download actual texture from mentioned site, and use `useTexture` hook to load it from public folder

In terms of size, you should use `256` which is more than enough

You should try to use smallest possible size that still looks good

# Optimization (hacky way)

if we have duplicate meshes, like we do in this workshop (nested with array `map` function), make sure to reuse geometry and material

- We did a silly trick where we nest one `<torusGeometry />` outside of the mesh
- we store that geometry with `useState`
- we put it back inside mesh from the state

**Setter function from the state we assign to the ref of torusGeometry**

**we assign state to the geometry attribute of the mesh**

Same thing you can do with the material too

# Optimization (simpler solution)

creating geometry and material instances the old (pure threejs) way, outside of r3f

**WE WILL CREATE MATERIAL AND GEOMETRY OUTSIDE OF THE COMPONENT**

And then we can use it as attributes on mesh tag

**But when you assign materia to the mesh, it will work but it will look wierd, maybe because encoding, or color space**

So I changed color space on the texture to **`SRGBColorSpace`** and it worked

# Accessing meshes you nested with arrays `map`

you can encapsulate meshes in a `<group>`, make a ref of the group, and then access `children` of the group

and you can animate desired child

We used group here but group isn't intended to be used for this purpose

Don't get me wrong, using group and accessing its children doesn't have some bad impact on performance but there is better way

We don't want to add group for purpose just to access children

# Accessing meshes you nested with arrays `map`, other solution, better but more complex

we will use array but we will going to declare it like this:

```ts
const donuts = useRef([]);

//
// ...
// and we are going to do this

 {[...Array(100)].map((_, i) => (
    <mesh
      ref={(m) => {
        // but not like this
        // donuts.current.push(m);
        // we are doing it with index
        donuts.current[i] = m;

      }}

// ...
```

So we are adding meshes to array, and later we can loop throug that array to animate individual meshes

to see what we did check `src/9_accessing_meshes_better_solution/Experience.tsx`
