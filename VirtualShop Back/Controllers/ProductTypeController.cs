using Microsoft.AspNetCore.Mvc;
using System.Linq;
using VirtualShop_Back.Models;
using System.Threading.Tasks;

namespace VirtualShop_Back.Models
{
    [Route("api/[controller]")]    
    public class ProductTypeController : Controller
    {
        private Connection connection;

        public ProductTypeController()
        {
            connection = Conecct.Create();
        }

        [HttpGet]
        public ActionResult Get(){
            return Ok(connection.ProductType.ToArray());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id){
            //var productTypee = connection.productType.SingleOrDefault(a => a.id == id);
            var productType = await connection.ProductType.FindAsync(id);
            if(productType != null){
                return Ok(productType);
            }
            else{
                return NotFound();
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody]ProductType productType){
            if(ModelState.IsValid){
                connection.ProductType.Add(productType);
                await connection.SaveChangesAsync();
                return Ok(productType);
            }
            else {
                return NotFound();
            }
        }

        [HttpPut]
        public async Task<ActionResult> Put([FromBody]ProductType productTypeUpdate){
            var productType = connection.ProductType.SingleOrDefault(a => a.id == productTypeUpdate.id);
            if(productType != null && ModelState.IsValid){
                connection.Entry(productType).CurrentValues.SetValues(productTypeUpdate);
                await connection.SaveChangesAsync();
                return Ok();
            }
            else {
                return NotFound();
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id){
            var productType = await connection.ProductType.FindAsync(id);
            if(productType != null){
                connection.ProductType.Remove(productType);
                await connection.SaveChangesAsync();
                return Ok();
            }
            else{
                return NotFound();
            }
        }
    }
}