using Microsoft.AspNetCore.Mvc;
using System.Linq;
using VirtualShop_Back.Models;
using System.Threading.Tasks;

namespace VirtualShop_Back.Models
{
    [Route("api/[controller]")]    
    public class CartDetailController : Controller
    {
        private Connection connection;

        public CartDetailController()
        {
            connection = Conecct.Create();
        }

        [HttpGet]
        public ActionResult Get(){
            return Ok(connection.CartDetail.ToArray());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id){
            var cartDetail = await connection.CartDetail.FindAsync(id);
            if(cartDetail != null){
                return Ok(cartDetail);
            }
            else{
                return NotFound();
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody]CartDetail cartDetail){
            if(ModelState.IsValid){
                connection.CartDetail.Add(cartDetail);
                await connection.SaveChangesAsync();
                return Ok(cartDetail);
            }
            else {
                return NotFound();
            }
        }

        [HttpPut]
        public async Task<ActionResult> Put([FromBody]CartDetail cartDetailUpdate){
            var cartDetail = connection.CartDetail.SingleOrDefault(a => a.id == cartDetailUpdate.id);
            if(cartDetail != null && ModelState.IsValid){
                connection.Entry(cartDetail).CurrentValues.SetValues(cartDetailUpdate);
                await connection.SaveChangesAsync();
                return Ok();
            }
            else {
                return NotFound();
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id){
            var cartDetail = await connection.CartDetail.FindAsync(id);
            if(cartDetail != null){
                connection.CartDetail.Remove(cartDetail);
                await connection.SaveChangesAsync();
                return Ok();
            }
            else{
                return NotFound();
            }
        }
    }
}