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
