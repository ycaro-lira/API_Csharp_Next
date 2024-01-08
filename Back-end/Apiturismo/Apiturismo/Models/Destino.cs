using MessagePack;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace apiagenciacsharp.Models
{

    public class Destino
    {
        [System.ComponentModel.DataAnnotations.Key]
        public int DestinosId { get; set; }

        [Required]
        [StringLength(80)]
        public string Lugar { get; set; }

        [Required]
        public decimal Preco { get; set; }

        [Required]
        [StringLength(300)]
        public string ImagemUrl { get; set; }
    }
}
