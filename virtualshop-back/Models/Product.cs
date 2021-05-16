using System.ComponentModel.DataAnnotations;
namespace VirtualShop_Back.Models{
    public class Product
    {
        [Key]
        public int id {get; set;}
        public string name {get; set;}
        public string description {get; set;}
        public int stock {get; set;}
        public decimal price {get; set;}
        public string image {get; set;}
        public int rating {get; set;}
        public string state {get; set;}

        public int idProductType{get;set;}
        public int idCategory{get;set;}
    }
}