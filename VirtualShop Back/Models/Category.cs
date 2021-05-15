using System.ComponentModel.DataAnnotations;
namespace VirtualShop_Back.Models{
    public class Category
    {
        [Key]
        public int id {get; set;}
        public string name {get; set;}
        public string description {get; set;}
    }
}