import { Button } from "./Button"

const DownloadButton = () => {
  const handleDownload = () => {
    // URL del archivo PDF en Netlify
    const pdfUrl = '/menu_afonte.pdf';  // Ajusta la URL según tu configuración

    // Crear un enlace temporal y forzar la descarga
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'menu_afonte.pdf';  // Nombre del archivo al descargar
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);  // Eliminar el enlace temporal
  };

  return (
    <Button onClick={handleDownload} type="button" className="outline-none border-none lg:px-7 px-5 py-3 bg-color2 text-white font-bold rounded-lg mt-10 mb-20">
                    Descargar Carta
                </Button>
  );
};

export default DownloadButton;
