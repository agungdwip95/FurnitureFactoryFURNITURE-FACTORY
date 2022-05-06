Vue.component('komponen-produk-terbaru',{
	filters: {
                  format_rupiah: function(value) {
                    var formatter = new Intl.NumberFormat("en-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0
                    });
                    return formatter.format(value);
                  }
                },
	template: `	
	      
	      <div class="row row-cols-1 row-cols-md-2 g-4">  
	        <div class="card text-dark bg-white border-2 border-dark rounded" style="width: 14rem;" v-for="(produk, index) of produks" :key="index">
	        <img width=200 :src="produk.link_gambar" />
	        <div class="card-body ">
	          <h5 class="card-title"><strong>{{ produk.nama }}</strong></h5>
	          <p class="card-text">{{ produk.deskripsi }} <br><br>
	                               <h4><strong>{{ produk.harga | format_rupiah }} </strong></h4> <br> 
	          </p>
	        </div>
	      </div>
	    </div>    

		`,
		
		data: function(){
			return {			   
               produks : [
                       {
		                id: 10,
		                nama: 'FINNSTARR',
		                harga: 299000,
		                deskripsi: 'Lampu kerja, hitam',
		                kategori: 'Lampu Meja',
		                stok_tersedia: 270,
		                link_gambar: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/657/0765770_PE753631_S4.jpg'
		              },
		              {
		                id: 9,
		                nama: 'SONGESAND',
		                harga: 3999000,
		                deskripsi: 'Lemari, cokelat',
		                kategori: 'Lemari Pakaian',
		                stok_tersedia: 320,
		                link_gambar: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/551/0555114_PE660180_S4.jpg'
		              },
		              {
		                id: 8,
		                nama: 'LANDSKRONA',
		                harga: 7095000,
		                deskripsi: 'Sofa 2 dudukan, abu',
		                kategori: 'Sofa',
		                stok_tersedia: 168,
		                link_gambar: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/021/0602101_PE680170_S4.jpg'
		              },
		              {
		                id: 7,
		                nama: 'HEMLAGAD',
		                harga: 199000,
		                deskripsi: 'Wajan, hitam',
		                kategori: 'Wajan',
		                stok_tersedia: 200,
		                link_gambar: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/891/0789104_PE763825_S4.jpg'
		              },
		              {
		                id: 6,
		                nama: 'KNODD',
		                harga: 299000,
		                deskripsi: 'Tempat sampah, abu',
		                kategori: 'Tempat Sampah',
		                stok_tersedia: 430,
		                link_gambar: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/111/0711156_PE728024_S4.jpg'
		              }    
				]
			}
		}
})

var vm = new Vue({
    		el: '#konten',

    	})