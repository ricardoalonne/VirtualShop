using System.ComponentModel.DataAnnotations;
namespace VirtualShop_Back.Models{
    public class ProductType
    {
        [Key]
        public int id {get; set;}
        public string name {get; set;}
        public string description {get; set;}
    }
}