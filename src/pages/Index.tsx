
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { sendToSheets } from "@/lib/sendToSheets";

const tipoOptions = [
  "Apartamento", "Casa", "Local Comercial", "Oficina", "Terreno", "Galpón", "Otro"
];
const estacionamientoOptions = ["0", "1", "2", "3+", "No tiene"];
const depositoOptions = ["Sí", "No"];
const amobladoOptions = ["Sí", "No", "Parcial"];
const estadoOptions = ["Original", "Bueno", "Remodelado", "A refaccionar"];
const cocinaOptions = ["Equipada", "Remodelada", "Original"];
const vistaOptions = ["Panorámica", "Interna", "Calle", "Parque", "Montaña", "Otro"];
const ruidoOptions = ["Bajo", "Medio", "Alto"];
const documentoOptions = [
  "Título registrado", "Protocolo", "Documento privado", "Sucesión", "En trámite"
];
const gravamenOptions = ["Sí", "No", "En revisión"];

const initialState = {
  fecha: "",
  tipo: "",
  ubicacion: "",
  urbanizacion: "",
  piso: "",
  tamano: "",
  precio: "",
  condiciones: "",
  servicios: "",
  areas: "",
  estacionamiento: "",
  deposito: "",
  amoblado: "",
  estado: "",
  cocina: "",
  vista: "",
  ruido: "",
  documento: "",
  gravamen: "",
  comentarios: "",
  cliente: "",
  contacto: "",
  asesor: "",
  visita: "",
  visitas: "",
  apreciacion: "",
  observaciones: "",
};

const Index = () => {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // Envía los datos usando el helper
      await sendToSheets(form);
      toast({ title: "¡Éxito!", description: "Formulario enviado correctamente." });
      setTimeout(() => {
        setSubmitting(false);
        setForm(initialState);
        navigate("/success");
      }, 1200);
    } catch (error) {
      toast({ title: "Error", description: "Hubo un error al enviar el formulario." });
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gold/5 to-white font-montserrat">
      <form
        className="bg-white/95 w-full max-w-lg md:rounded-xl shadow-xl py-10 px-4 md:px-12 space-y-1 border border-gold/20"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <h2 className="text-2xl font-bold text-gold mb-4 text-center tracking-tight">Registro de Inmueble</h2>
        <div className="grid grid-cols-1 gap-2">
          <InputField type="date" name="fecha" label="Fecha de Registro" value={form.fecha} onChange={handleChange} required />
          <SelectField name="tipo" label="Tipo de Inmueble" value={form.tipo} onChange={handleChange} options={tipoOptions} required />
          <InputField type="text" name="ubicacion" label="Ubicación (Zona)" placeholder="Introduce la ubicación" value={form.ubicacion} onChange={handleChange} required />
          <InputField type="text" name="urbanizacion" label="Urbanización / Edificio" placeholder="Introduce la urbanización" value={form.urbanizacion} onChange={handleChange} />
          <InputField type="text" name="piso" label="Piso" placeholder="Introduce el piso" value={form.piso} onChange={handleChange} />
          <InputField type="number" name="tamano" label="Tamaño (m²)" placeholder="Introduce el tamaño" value={form.tamano} onChange={handleChange} />
          <InputField type="number" name="precio" label="Precio (USD)" placeholder="Introduce el precio" value={form.precio} onChange={handleChange} />
          <InputField type="text" name="condiciones" label="Condiciones de Pago" placeholder="Introduce las condiciones" value={form.condiciones} onChange={handleChange} />
          <InputField type="text" name="servicios" label="Servicios Activos" placeholder="Introduce los servicios" value={form.servicios} onChange={handleChange} />
          <InputField type="text" name="areas" label="Áreas Comunes" placeholder="Introduce las áreas" value={form.areas} onChange={handleChange} />
          <SelectField name="estacionamiento" label="Estacionamiento" value={form.estacionamiento} onChange={handleChange} options={estacionamientoOptions} />
          <SelectField name="deposito" label="Depósito" value={form.deposito} onChange={handleChange} options={depositoOptions} />
          <SelectField name="amoblado" label="Amoblado" value={form.amoblado} onChange={handleChange} options={amobladoOptions} />
          <SelectField name="estado" label="Estado General" value={form.estado} onChange={handleChange} options={estadoOptions} />
          <SelectField name="cocina" label="Cocina" value={form.cocina} onChange={handleChange} options={cocinaOptions} />
          <SelectField name="vista" label="Vista" value={form.vista} onChange={handleChange} options={vistaOptions} />
          <SelectField name="ruido" label="Nivel de Ruido" value={form.ruido} onChange={handleChange} options={ruidoOptions} />
          <SelectField name="documento" label="Documento Legal" value={form.documento} onChange={handleChange} options={documentoOptions} />
          <SelectField name="gravamen" label="Libre de Gravamen" value={form.gravamen} onChange={handleChange} options={gravamenOptions} />
          <TextAreaField name="comentarios" label="Comentarios Legales" placeholder="Introduce comentarios legales" value={form.comentarios} onChange={handleChange} />
          <InputField type="text" name="cliente" label="Nombre del Cliente" placeholder="Introduce el nombre del cliente" value={form.cliente} onChange={handleChange} />
          <InputField type="text" name="contacto" label="Teléfono / Email" placeholder="Introduce el teléfono o email" value={form.contacto} onChange={handleChange} />
          <InputField type="text" name="asesor" label="Asesor" placeholder="Introduce el nombre del asesor" value={form.asesor} onChange={handleChange} />
          <InputField type="date" name="visita" label="Fecha de Visita" value={form.visita} onChange={handleChange} />
          <InputField type="number" name="visitas" label="Visitas Realizadas" placeholder="Introduce el número de visitas" value={form.visitas} onChange={handleChange} />
          <InputField type="text" name="apreciacion" label="Apreciación del Cliente" placeholder="Introduce la apreciación del cliente" value={form.apreciacion} onChange={handleChange} />
          <TextAreaField name="observaciones" label="Observaciones del Cliente" placeholder="Introduce observaciones del cliente" value={form.observaciones} onChange={handleChange} />
        </div>
        <button
          type="submit"
          className="w-full mt-1 bg-gold text-black font-bold rounded-lg py-3 shadow-md hover:bg-black hover:text-gold transition-all text-lg tracking-wide active:scale-97 disabled:opacity-70"
          disabled={submitting}
        >
          {submitting ? "Enviando..." : "Registrar"}
        </button>
      </form>
    </div>
  );
};

const InputField = ({
  type,
  name,
  label,
  value,
  onChange,
  placeholder,
  required,
}: {
  type: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}) => (
  <div>
    <label htmlFor={name} className="font-semibold text-base text-gray-700">{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-gold focus:ring-2 focus:ring-gold bg-white/80 transition px-3 py-2"
    />
  </div>
);

const SelectField = ({
  name,
  label,
  value,
  onChange,
  options,
  required,
}: {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  required?: boolean;
}) => (
  <div>
    <label htmlFor={name} className="font-semibold text-base text-gray-700">{label}</label>
    <select
      id={name}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-gold focus:ring-2 focus:ring-gold bg-white/80 transition px-3 py-2"
    >
      <option value="" disabled>
        Selecciona una opción
      </option>
      {options.map(opt => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const TextAreaField = ({
  name,
  label,
  value,
  onChange,
  placeholder,
}: {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}) => (
  <div>
    <label htmlFor={name} className="font-semibold text-base text-gray-700">{label}</label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={2}
      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-gold focus:ring-2 focus:ring-gold bg-white/80 transition px-3 py-2 resize-none"
    />
  </div>
);

export default Index;
