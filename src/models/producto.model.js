class PRODUCTO {
    constructor(
        ID_UN, 
        PRODUCTO, 
        NOMBRE, 
        CLASE, 
        ID_GRUPO, 
        TIPO_MARCA, 
        MARCA, MODELO, 
        NUMERO_PARTE, 
        PERFIL_TRIBUTARIO, 
        INVENTARIO, 
        BODEGA, 
        COMENTARIOS, 
        ESTADO,
        CONTROL_SERIAL, 
        CAMBIAR_NOMBRE,
        VALOR_NEGATIVO, 
        MARGEN_RENTABILIDAD, 
        DOCUMENTO
    ) {

        this.ID_UN = ID_UN == undefined && ID_UN == null ? '': ID_UN;
        this.PRODUCTO = PRODUCTO == undefined && PRODUCTO == null ? '': PRODUCTO;
        this.NOMBRE = NOMBRE == undefined && NOMBRE == null ? '': NOMBRE;
        this.CLASE = CLASE == undefined && CLASE == null ? '': CLASE;
        this.ID_GRUPO = ID_GRUPO == undefined && ID_GRUPO == null ? '': ID_GRUPO;
        this.TIPO_MARCA = TIPO_MARCA == undefined && TIPO_MARCA == null ? '': TIPO_MARCA;
        this.MARCA = MARCA == undefined && MARCA == null ? '': MARCA;
        this.MODELO = MODELO == undefined && MODELO == null ? '': MODELO;
        this.NUMERO_PARTE = NUMERO_PARTE == undefined && NUMERO_PARTE == null ? '': NUMERO_PARTE; 
        this.PERFIL_TRIBUTARIO = PERFIL_TRIBUTARIO == undefined && PERFIL_TRIBUTARIO == null ? '': PERFIL_TRIBUTARIO;
        this.INVENTARIO = INVENTARIO == undefined && INVENTARIO == null ? '': INVENTARIO;
        this.BODEGA = BODEGA == undefined && BODEGA == null ? '': BODEGA;
        this.COMENTARIOS = COMENTARIOS == undefined && COMENTARIOS == null ? '': COMENTARIOS;
        this.ESTADO = ESTADO == undefined && ESTADO == null ? '': ESTADO;
        this.CONTROL_SERIAL = CONTROL_SERIAL == undefined && CONTROL_SERIAL == null ? '': CONTROL_SERIAL;
        this.CAMBIAR_NOMBRE = CAMBIAR_NOMBRE == undefined && CAMBIAR_NOMBRE == null ? '': CAMBIAR_NOMBRE;
        this.VALOR_NEGATIVO = VALOR_NEGATIVO == undefined && VALOR_NEGATIVO == null ? '': VALOR_NEGATIVO;
        this.MARGEN_RENTABILIDAD = MARGEN_RENTABILIDAD == undefined && MARGEN_RENTABILIDAD == null ? '': MARGEN_RENTABILIDAD;
        this.DOCUMENTO = DOCUMENTO == undefined && DOCUMENTO == null ? '': DOCUMENTO;

    }
}


class PORTAFOLIO {
    constructor(
        Cliente,
        Canales_Digitales,
        CATEGORIA,
        LINEA,
        BANDA,
        ESTILO,
        FAMILIA,
        VERSION,
        CODIGO_PRODUCTO,
        NOMBRE_PRODUCTO,
        Tamano,
        MATERIAL_ESTRUCTURA,
        COLOR_ESTRUCTURA,
        MATERIAL_TAPIZADO,
        NOMBRE_TELA,
        COLOR_TAPIZADO,
        COLOR_HILO,
        COMPOSICIÓN_DESCRIPCION_General,
        ATRIBUTOS_BENEFICIOS_Eva,
        ALTO_H_CM,
        ANCHO_W_Frente_CM,
        LARGO_L_Fondo_Lateral_profnd_CM,
        Peso_KG,
        Num_Piezas_Empaque,
       ) {
        this.Cliente = Cliente;
        this.Canales_Digitales = Canales_Digitales;
        this.CATEGORIA = CATEGORIA;
        this.LINEA = LINEA;
        this.BANDA = BANDA;
        this.ESTILO = ESTILO;
        this.FAMILIA = FAMILIA;
        this.VERSION = VERSION;
        this.CODIGO_PRODUCTO = CODIGO_PRODUCTO;
        this.NOMBRE_PRODUCTO = NOMBRE_PRODUCTO;
        this.Tamano = Tamano;
        this.MATERIAL_ESTRUCTURA = MATERIAL_ESTRUCTURA;
        this.COLOR_ESTRUCTURA = COLOR_ESTRUCTURA;
        this.MATERIAL_TAPIZADO = MATERIAL_TAPIZADO;
        this.NOMBRE_TELA = NOMBRE_TELA;
        this.COLOR_TAPIZADO = COLOR_TAPIZADO;
        this.COLOR_HILO = COLOR_HILO;
        this.COMPOSICIÓN_DESCRIPCION_General = COMPOSICIÓN_DESCRIPCION_General;
        this.ATRIBUTOS_BENEFICIOS_Eva = ATRIBUTOS_BENEFICIOS_Eva;
        this.ALTO_H_CM = ALTO_H_CM;
        this.ANCHO_W_Frente_CM = ANCHO_W_Frente_CM;
        this.LARGO_L_Fondo_Lateral_profnd_CM = LARGO_L_Fondo_Lateral_profnd_CM;
        this.Peso_KG = Peso_KG;
        this.Num_Piezas_Empaque = Num_Piezas_Empaque;
       }
} 
class PRODUCTO_UPLOAD {
    constructor(
        Categoria,
        Grupo,
        Codigo_Producto,
        Nombre_Producto,
        Tamano,
        Version,
        Precio_Regular,
        Oferta,
        Unidad_de_Medida,
        attr_Estilo,
        attr_Color_Estructura,
        attr_Color_Tapizado,
        attr_Tamano,
        attr_material_Estructura,
        attr_Material_Tapizado,
        attr_code_color,
        Descripcion_detallada,
        Atributos_Beneficios,
        Alto,
        Ancho,
        Largo,
        Peso,
        Nro_Piezas_empaque,
        
    ) {
        this.Categoria =  Categoria == undefined && Categoria == null ? '': Categoria;
        this.Grupo =  Grupo == undefined && Grupo == null ? '': Grupo;
        this.Codigo_Producto =  Codigo_Producto == undefined && Codigo_Producto == null ? '': Codigo_Producto;
        this.Nombre_Producto =  Nombre_Producto == undefined && Nombre_Producto == null ? '': Nombre_Producto;
        this.Tamano =  Tamano == undefined && Tamano == null ? '': Tamano;
        this.Version =  Version == undefined && Version == null ? '': Version;
        this.Precio_Regular =  Precio_Regular == undefined && Precio_Regular == null ? 0: Precio_Regular;
        this.Oferta =  Oferta == undefined && Oferta == null ? 0: Oferta;
        this.Unidad_de_Medida =  Unidad_de_Medida == undefined && Unidad_de_Medida == null ? '': Unidad_de_Medida;
        this.attr_Estilo =  attr_Estilo == undefined && attr_Estilo == null ? '': attr_Estilo;
        this.attr_Color_Estructura =  attr_Color_Estructura == undefined && attr_Color_Estructura == null ? '': attr_Color_Estructura;
        this.attr_Color_Tapizado =  attr_Color_Tapizado == undefined && attr_Color_Tapizado == null ? '': attr_Color_Tapizado;
        this.attr_Tamano =  attr_Tamano == undefined && attr_Tamano == null ? '': attr_Tamano;
        this.attr_material_Estructura =  attr_material_Estructura == undefined && attr_material_Estructura == null ? '': attr_material_Estructura;
        this.attr_Material_Tapizado =  attr_Material_Tapizado == undefined && attr_Material_Tapizado == null ? '': attr_Material_Tapizado;
        this.attr_code_color =  attr_code_color == undefined && attr_code_color == null ? '': attr_code_color;
        this.Descripcion_detallada =  Descripcion_detallada == undefined && Descripcion_detallada == null ? '': Descripcion_detallada;
        this.Atributos_Beneficios =  Atributos_Beneficios == undefined && Atributos_Beneficios == null ? '': Atributos_Beneficios;
        this.Alto =  Alto == undefined && Alto == null ? 0 : Alto;
        this.Ancho =  Ancho == undefined && Ancho == null ? 0: Ancho;
        this.Largo =  Largo == undefined && Largo == null ? 0: Largo;
        this.Peso =  Peso == undefined && Peso == null ? 0: Peso;
        this.Nro_Piezas_empaque =  Nro_Piezas_empaque == undefined && Nro_Piezas_empaque == null ? 0: Nro_Piezas_empaque;
    }
}

module.exports = {
    PRODUCTO,
    PORTAFOLIO,
    PRODUCTO_UPLOAD
};