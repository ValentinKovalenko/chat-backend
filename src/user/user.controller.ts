import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  findAll() {
    return this.userService.findAllUser();
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(+id, updateUserDto);
  }
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.viewUser(+id);
  // }
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.removeUser(+id);
  // }
}
