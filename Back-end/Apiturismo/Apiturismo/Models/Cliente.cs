using MessagePack;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace apiagenciacsharp.Models
{

    public class Cliente
    {
        
        public int ClienteId { get; set; }

        [Required]
        [StringLength(80)]
        public string Nome { get; set; }

        [Required]
        [StringLength(300)]
        public string Email { get; set; }

        [Required]
        [StringLength(300)]
        public string Senha { get; set; }

    }
}
