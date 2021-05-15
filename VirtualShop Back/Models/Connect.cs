using Microsoft.EntityFrameworkCore;
namespace VirtualShop_Back.Models{
    public class Conecct : DbContext{
        private const string connectionString = "server=localhost; port=3306; database=virtualshopdb; userid=adminShop; pwd=toor#21@";
        
        public static Connection Create(){
            var construct = new DbContextOptionsBuilder<Connection>();
            construct.UseMySQL(connectionString);
            var connection = new Connection(construct.Options);
            return connection;
        }
    }
}