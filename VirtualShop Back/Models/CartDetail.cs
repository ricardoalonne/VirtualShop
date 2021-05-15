using System.ComponentModel.DataAnnotations;
namespace VirtualShop_Back.Models{
    public class CartDetail
    {
        [Key]
        public int id {get; set;}
        public int idCart {get;set;}
        public int idProduct {get;set;}
        public int quantity {get; set;}
    }
}