using System.ComponentModel.DataAnnotations;
namespace VirtualShop_Back.Models{
    public class Cart
    {
        [Key]
        public int id {get; set;}
        public decimal totalCost {get; set;}
        public string state {get; set;}
        public int idClient {get;set;}
    }
}