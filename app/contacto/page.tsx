"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { Textarea } from "@/components/ui/textarea"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
  nombre: z.string().min(2, {
    message: "Tu nombre debe tener al menos 2 caracteres.",
  }),
  apellido: z.string().min(2, {
    message: "Tu apellido debe tener al menos 2 caracteres.",
  }),
  correo: z.email({
    message: "No parece correcto.",
  }),
  telefono: z.number().min(10, {
    message: "Tu numero de telefono debe tener 10 numeros"
  }),
  clase: z.string().nonempty("Campo obligatorio"),
  nivel: z.string().nonempty("Campo obligatorio"),
  mensaje: z.string().max(600, {
    message: "No podes escribir más que 600 caracteres aqui.",
  }),
})

export default function Contact() {

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      correo: "",
      telefono: 0,
      clase: "",
      nivel: "",
      mensaje: ""
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <>
      <section className="section">
        <h3 className="h3">¡Dejame tu mensaje!</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}
            className="border p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
          >
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Nombre *" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="apellido"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Apellido *" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="correo"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Correo *" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telefono"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Teléfono *" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="clase"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange}>
                    <FormControl className="w-full">
                      <SelectTrigger>
                        <SelectValue placeholder="Tipo de clase *" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="grupales">Cursos Grupales</SelectItem>
                      <SelectItem value="unt">Cursos para la UNT</SelectItem>
                      <SelectItem value="individuales">Clases Individuales</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nivel"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange}>
                    <FormControl className="w-full">
                      <SelectTrigger>
                        <SelectValue placeholder="Su nivel de inglés *" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Nunca estudié</SelectItem>
                      <SelectItem value="2">Hablo con dificultad</SelectItem>
                      <SelectItem value="3">Hablo en presente y con frases simples</SelectItem>
                      <SelectItem value="4">Hablo en pasado y de deseos</SelectItem>
                      <SelectItem value="5">Hablo de historias con todos los pasados</SelectItem>
                      <SelectItem value="6">Debato bien, falta expresividad</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mensaje"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormControl>
                    <Textarea
                      placeholder="Escribi tu mensaje aqui"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-fit">Enviar</Button>
          </form>
        </Form>

      </section>
    </>
  )
}