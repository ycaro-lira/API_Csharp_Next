
using Microsoft.EntityFrameworkCore;
using apiagenciacsharp.Models;


namespace apiagenciacsharp.Context
{
    public class ApiBdContext : DbContext
    {

        public ApiBdContext(DbContextOptions<ApiBdContext> options) : base(options)
        { }

        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Destino> Destinos { get; set; }

    }

}