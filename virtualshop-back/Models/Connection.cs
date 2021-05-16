using Microsoft.EntityFrameworkCore;
namespace VirtualShop_Back.Models{
    public class Connection : DbContext{
        public Connection(){}
        public Connection(DbContextOptions<Connection> options) : base(options){ }

        public DbSet<Client> Client { get; set; }
        public DbSet<Employee> Employee { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<ProductType> ProductType { get; set; }
        public DbSet<Product> Product { get; set; }
        public DbSet<Cart> Cart { get; set; }
        public DbSet<CartDetail> CartDetail { get; set; }
        
    }
}