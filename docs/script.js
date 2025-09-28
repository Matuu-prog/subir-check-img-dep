(function(){
  const input = document.getElementById('fileInput');
  const preview = document.getElementById('preview');

  input.addEventListener('change', function(e){
    const file = e.target.files && e.target.files[0];
    preview.innerHTML = '';
    if(!file){
      preview.innerHTML = '<p>No hay imagen cargada</p>';
      return;
    }
    // Validar tipo usando File.type
    if(!file.type || !file.type.startsWith('image/')){
      preview.innerHTML = '<p class="error">El archivo seleccionado no es una imagen.</p>';
      return;
    }
    // Leer con FileReader
    const reader = new FileReader();
    reader.onload = function(ev){
      const img = document.createElement('img');
      img.src = ev.target.result;
      img.alt = file.name || 'Imagen subida';
      preview.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
})();