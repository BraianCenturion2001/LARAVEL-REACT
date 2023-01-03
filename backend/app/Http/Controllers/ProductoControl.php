<?php

namespace App\Http\Controllers;
use App\Models\Producto;
use Illuminate\Http\Request;

class ProductoControl extends Controller
{
    public function index()
    {
        $productos = Producto::all();
        return $productos;
    }

    public function store(Request $request)
    {
        $producto = new Producto();

        $producto->nombre = $request->nombre;
        $producto->detalle = $request->detalle;
        $producto->stock = $request->stock;
        $producto->precio = $request->precio;

        $producto->save();
    }

    public function show($id)
    {
        $producto = Producto::find($id);
        return $producto;
    }

    public function update(Request $request, $id)
    {
        $producto = Producto::findOrFail($request->id);

        $producto->nombre = $request->nombre;
        $producto->detalle = $request->detalle;
        $producto->stock = $request->stock;
        $producto->precio = $request->precio;

        $producto->save();
        return $producto;
    }

    public function destroy($id)
    {
        $producto = Producto::destroy($id);
        return $producto;
    }
}
