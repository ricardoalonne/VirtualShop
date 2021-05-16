using Microsoft.AspNetCore.Mvc;
using System.Linq;
using VirtualShop_Back.Models;
using System.Threading.Tasks;

namespace VirtualShop_Back.Models
{
    [Route("api/[controller]")]    
    public class CategoryController : Controller
    {
        private Connection connection;

        public CategoryController()
        {
            connection = Conecct.Create();
        }

        [HttpGet]
        public ActionResult Get(){
            return Ok(connection.Category.ToArray());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id){
            var category = await connection.Category.FindAsync(id);
            if(category != null){
                return Ok(category);
            }
            else{
                return NotFound();
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody]Category category){
            if(ModelState.IsValid){
                connection.Category.Add(category);
                await connection.SaveChangesAsync();
                return Ok(category);
            }
            else {
                return NotFound();
            }
        }

        [HttpPut]
        public async Task<ActionResult> Put([FromBody]Category categoryUpdate){
            var category = connection.Category.SingleOrDefault(a => a.id == categoryUpdate.id);
            if(category != null && ModelState.IsValid){
                connection.Entry(category).CurrentValues.SetValues(categoryUpdate);
                await connection.SaveChangesAsync();
                return Ok();
            }
            else {
                return NotFound();
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id){
            var category = await connection.Category.FindAsync(id);
            if(category != null){
                connection.Category.Remove(category);
                await connection.SaveChangesAsync();
                return Ok();
            }
            else{
                return NotFound();
            }
        }
    }
}