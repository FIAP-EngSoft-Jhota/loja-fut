import React from 'react'

function Footer() {
  return (
      <footer class="bg-red-950 text-white py-10">
          <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

           
              <div>
                  <h3 class="text-white text-lg font-bold mb-3"> FutStore</h3>
                  <p class="text-sm text-gray-400">A loja oficial do torcedor. As melhores camisas e mantos com qualidade e preço justo.</p>
              </div>

         

              
              <div>
                  <h4 class="text-white font-semibold mb-3">Contato</h4>
                  <p class="text-sm">WhatsApp: (11) 98326-9999</p>
                  <p class="text-sm mt-1">Email: suporte@futstore.com</p>
              </div>

          </div>

    
          <div class="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-500">
              <p>© 2026 FutStore. Todos os direitos reservados.</p>
          </div>
      </footer>
  )
}

export default Footer
