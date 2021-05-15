using Microsoft.AspNetCore.Mvc;
using System.Linq;
using VirtualShop_Back.Models;
using System.Threading.Tasks;

namespace VirtualShop_Back.Models
{
    [Route("api/[controller]")]    
    public class ProductController : Controller
    {
        private Connection connection;

        public ProductController()
        {
            connection = Conecct.Create();
        }

        [HttpGet]
        public ActionResult Get(){
            return Ok(connection.Product.ToArray());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id){
            //var producte = connection.product.SingleOrDefault(a => a.id == id);
            var product = await connection.Product.FindAsync(id);
            if(product != null){
                return Ok(product);
            }
            else{
                return NotFound();
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody]Product product){
            if(ModelState.IsValid){
                connection.Product.Add(product);
                await connection.SaveChangesAsync();
                return Ok(product);
            }
            else {
                return NotFound();
            }
        }

        [HttpPut]
        public async Task<ActionResult> Put([FromBody]Product productUpdate){
            var product = connection.Product.SingleOrDefault(a => a.id == productUpdate.id);
            if(product != null && ModelState.IsValid){
                connection.Entry(product).CurrentValues.SetValues(productUpdate);
                await connection.SaveChangesAsync();
                return Ok();
            }
            else {
                return NotFound();
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id){
            var product = await connection.Product.FindAsync(id);
            if(product != null){
                connection.Product.Remove(product);
                await connection.SaveChangesAsync();
                return Ok();
            }
            else{
                return NotFound();
            }
        }
    }
}