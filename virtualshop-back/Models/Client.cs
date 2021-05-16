using System.ComponentModel.DataAnnotations;
namespace VirtualShop_Back.Models{
    public class Client
    {
        [Key]
        public int id {get; set;}
        public string dni {get; set;}
        public string name {get; set;}
        public string lastname {get; set;}
        public string homeAddress {get; set;}
        public string cellPhone {get; set;}
        public string email {get; set;}
        public string password {get; set;}
        public string state {get; set;}
    }
}